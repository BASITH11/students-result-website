import { useDisclosure } from '@mantine/hooks';
import { AppShell, Text, Box, AppShellFooter } from '@mantine/core';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';

export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 80 }} // Match header height
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Header toggleNavbar={toggle} navbarOpened={opened} />
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">
        <Text>Navigation Menu</Text>
      </AppShell.Navbar> */}

      <AppShell.Main>
        {/* Your main content */}
        <Text>Welcome to Student Results Portal</Text>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
