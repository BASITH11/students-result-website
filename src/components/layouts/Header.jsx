import { Box, Text, Group, Button, useMantineColorScheme, Container, Burger, Tooltip, ActionIcon} from "@mantine/core";
import { IconSun, IconMoon, IconSearch, IconUser } from "@tabler/icons-react";
import React from "react";

export const Header = ({ toggleNavbar, navbarOpened }) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Box
            style={{
                backgroundColor: colorScheme === 'dark' ? '#1a1b1e' : '#ffffff',
                height: 80,
                borderBottom: colorScheme === 'dark' ? '1px solid #373a40' : '1px solid #e9ecef',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
        >
            <Container size="xl" h="100%">
                <Group justify="space-between" h="100%">
                    {/* Logo & Burger */}
                    <Group>
                        <Burger
                            opened={navbarOpened}
                            onClick={toggleNavbar}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Text
                            fw={800}
                            size="xl"
                            c={colorScheme === 'dark' ? 'white' : 'blue.6'}
                            style={{
                                fontFamily: 'system-ui, -apple-system, sans-serif',
                                letterSpacing: '-0.5px'
                            }}
                        >
                            🎓 Student Results
                        </Text>
                    </Group>

                    {/* Navigation Links */}
                    <Group gap="xl" visibleFrom="sm">
                        <Text
                            fw={500}
                            c={colorScheme === 'dark' ? 'gray.3' : 'gray.7'}
                            style={{ cursor: 'pointer' }}
                        >
                            Home
                        </Text>
                        <Text
                            fw={500}
                            c={colorScheme === 'dark' ? 'gray.3' : 'gray.7'}
                            style={{ cursor: 'pointer' }}
                        >
                            Results
                        </Text>
                        <Text
                            fw={500}
                            c={colorScheme === 'dark' ? 'gray.3' : 'gray.7'}
                            style={{ cursor: 'pointer' }}
                        >
                            About
                        </Text>
                        <Text
                            fw={500}
                            c={colorScheme === 'dark' ? 'gray.3' : 'gray.7'}
                            style={{ cursor: 'pointer' }}
                        >
                            Contact
                        </Text>
                    </Group>

                    {/* Action Buttons */}
                    <Group gap="sm">
                        {/* Theme Toggle */}
                        <Tooltip
                            label={colorScheme === 'dark' ? 'Light mode' : 'Dark mode'}
                            position="bottom"
                        >
                            <ActionIcon
                                variant="subtle"
                                color={colorScheme === 'dark' ? 'gray.5' : 'gray.7'}
                                onClick={() => toggleColorScheme()}
                                size="lg"
                            >
                                {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
                            </ActionIcon>
                        </Tooltip>



                    </Group>
                </Group>
            </Container>
        </Box>
    );
};
