import MagicSelect from './components/MagicSelect/MagicSelect.jsx';
import options from './options.json';

export default function App() {
  return (
    <form>
      <MagicSelect
        className="meu-formulario meu-select-small"
        defaultOption={{ raw: 'Selecione', brief: 'Sel.', value: '' }}
        options={options.data}
        required
      />
    </form>
  );
}
