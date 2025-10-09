import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Preferences = Record<string, string>;

export default function PreferencesPage() {
  const [formData, setFormData] = useState<Preferences>({
    buy_bg: '',
    buy_border: '',
    buy_text: '',
    sell_bg: '',
    sell_border: '',
    sell_text: '',
    neutral_bg: '',
    neutral_border: '',
    neutral_text: '',
    opportunity_bg: '',
    opportunity_border: '',
    opportunity_text: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchPreferences = async () => {
      const { data, error } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', 'your-user-id') // Replace with actual user ID
        .single();

      if (data) setFormData(data);
    };

    fetchPreferences();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase
      .from('user_preferences')
      .update(formData)
      .eq('user_id', 'your-user-id'); // Replace with actual user ID

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Customize Tile Colors</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {['buy', 'sell', 'neutral', 'opportunity'].map((signal) => (
          <div key={signal} className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 capitalize">{signal} Signal</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Background</label>
                <input
                  type="color"
                  name={`${signal}_bg`}
                  value={formData[`${signal}_bg`] || '#ffffff'}
                  onChange={handleChange}
                  className="w-full h-10 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Border</label>
                <input
                  type="color"
                  name={`${signal}_border`}
                  value={formData[`${signal}_border`] || '#ffffff'}
                  onChange={handleChange}
                  className="w-full h-10 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Text</label>
                <input
                  type="color"
                  name={`${signal}_text`}
                  value={formData[`${signal}_text`] || '#000000'}
                  onChange={handleChange}
                  className="w-full h-10 border rounded"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Preferences
        </button>

        {status === 'success' && (
          <p className="text-green-600 mt-2">Preferences saved successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-2">Error saving preferences. Please try again.</p>
        )}
      </form>
    </div>
  );
}
