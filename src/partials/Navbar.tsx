import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img src='../../public/assets/images/AVID.png' alt='logo' width={'30px'}/>
          }
          name="Avid Tech Usa"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="https://github.com/workoholyguy">GitHub</NavMenuItem>
        <NavMenuItem href="https://www.linkedin.com/in/omar-madjitov-6b3a33234/">LinkedIn</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
