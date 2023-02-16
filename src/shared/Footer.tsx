import { Footer as DaisyFooter } from 'react-daisyui';
import { NavLink } from 'react-router-dom';

export default function Footer(args: any) {
  return (
    <DaisyFooter className="items-center p-4 bg-neutral text-neutral-content shrink-0" {...args}>
      <div className="items-center grid-flow-col">
        <p>© {new Date().getFullYear()} Kiel. Alle Rechte vorbehalten.</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <NavLink to="/imprint">Impressum</NavLink>
        <NavLink to="/privacy">Datenschutz</NavLink>
      </div>
    </DaisyFooter>
  );
}
