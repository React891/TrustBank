type Props = {
  value: string;
  label: string;
  error: string;
  name: string;
  style?: string;
  onChange: (e: any) => void;
};

export default function Input({ value, label, name, error, onChange, style }: Props) {
  return <div>
    <div className="h-12 w-full">
        <p>{label}</p>
        <input type="text" name={name} onChange={onChange} className="h-full w-full"/>
        <p>{error}</p>
    </div>
  </div>;
}
