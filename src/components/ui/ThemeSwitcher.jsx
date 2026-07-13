import { useTheme } from '@/hooks';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='inline-flex flex-col gap-2'>
      <label htmlFor='theme-switcher' className='sr-only'>
        Select theme
      </label>

      <select
        id='theme-switcher'
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className='rounded-md border border-(--border) bg-(--surface) px-3 py-2 text-(--text) focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <option value='light'>☀️ Light</option>
        <option value='dark'>🌙 Dark</option>
        <option value='system'>💻 System</option>
      </select>
    </div>
  );
}
