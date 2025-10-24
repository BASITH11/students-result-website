import { Box, Container, Group, Text, Stack, Anchor, Divider, useMantineColorScheme } from '@mantine/core';
import { IconBrandGithub, IconMail, IconPhone, IconMapPin, IconSchool } from '@tabler/icons-react';

export const Footer = () => {
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <Box
            component="footer"
            bg={isDark ? 'dark.8' : 'gray.0'}
            c={isDark ? 'gray.0' : 'dark.9'}
            style={{ 
                marginTop: 'auto', 
                borderTop: `1px solid ${isDark ? '#373a40' : '#dee2e6'}` 
            }}
            py="xl"
        >
            <Container size="xl">
                {/* Main Footer Content */}
                <Group justify="space-between" align="flex-start" mb="xl" wrap="wrap" gap="xl">
                    {/* Brand & Description */}
                    <Stack gap="xs" style={{ maxWidth: 300 }}>
                        <Group gap="xs">
                            <IconSchool size={28} color={isDark ? '#4DABF7' : '#228BE6'} />
                            <Text fw={700} size="xl" c={isDark ? 'blue.4' : 'blue.6'}>
                                Student Results
                            </Text>
                        </Group>
                        <Text size="sm" c={isDark ? 'gray.4' : 'gray.6'}>
                            Providing accurate and accessible student results for educational institutions. 
                            Easy to search, reliable, and always up-to-date.
                        </Text>
                        <Group gap="xs" mt="sm">
                            <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                                <IconBrandGithub size={18} />
                            </Anchor>
                            <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                                Privacy Policy
                            </Anchor>
                            <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                                Terms
                            </Anchor>
                        </Group>
                    </Stack>

                    {/* Quick Links */}
                    <Stack gap="xs">
                        <Text fw={600} size="lg" c={isDark ? 'white' : 'dark.9'}>
                            Quick Links
                        </Text>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            Home
                        </Anchor>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            Search Results
                        </Anchor>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            Departments
                        </Anchor>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            Academic Calendar
                        </Anchor>
                    </Stack>

                    {/* Student Resources */}
                    <Stack gap="xs">
                        <Text fw={600} size="lg" c={isDark ? 'white' : 'dark.9'}>
                            Resources
                        </Text>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            How to Search
                        </Anchor>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            FAQ
                        </Anchor>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            Support Center
                        </Anchor>
                        <Anchor href="#" c={isDark ? 'gray.4' : 'gray.6'} size="sm">
                            Download App
                        </Anchor>
                    </Stack>

                    {/* Contact Information */}
                    <Stack gap="xs">
                        <Text fw={600} size="lg" c={isDark ? 'white' : 'dark.9'}>
                            Contact Us
                        </Text>
                        <Group gap="xs" align="flex-start">
                            <IconMail size={16} color={isDark ? '#ADB5BD' : '#495057'} />
                            <Text size="sm" c={isDark ? 'gray.4' : 'gray.6'}>
                                support@studentresults.edu
                            </Text>
                        </Group>
                        <Group gap="xs" align="flex-start">
                            <IconPhone size={16} color={isDark ? '#ADB5BD' : '#495057'} />
                            <Text size="sm" c={isDark ? 'gray.4' : 'gray.6'}>
                                +1 (555) 123-4567
                            </Text>
                        </Group>
                        <Group gap="xs" align="flex-start">
                            <IconMapPin size={16} color={isDark ? '#ADB5BD' : '#495057'} />
                            <Text size="sm" c={isDark ? 'gray.4' : 'gray.6'}>
                                123 Education Street<br />
                                Campus City, CC 12345
                            </Text>
                        </Group>
                    </Stack>
                </Group>

                {/* Divider */}
                <Divider color={isDark ? 'gray.7' : 'gray.3'} mb="md" />

                {/* Copyright & Additional Info */}
                <Group justify="space-between" wrap="wrap">
                    <Text size="sm" c={isDark ? 'gray.5' : 'gray.6'}>
                        © 2024 Student Results Portal. All rights reserved.
                    </Text>
                    <Group gap="md">
                        <Text size="sm" c={isDark ? 'gray.5' : 'gray.6'}>
                            🎓 Empowering Education
                        </Text>
                        <Text size="xs" c={isDark ? 'gray.6' : 'gray.5'}>
                            v2.1.0
                        </Text>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
};
