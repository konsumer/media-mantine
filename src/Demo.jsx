import { useState } from 'react'
import { ImageInput, VideoInput } from 'media-mantine'
import { MantineProvider, AppShell, Text, Header, Card, SimpleGrid } from '@mantine/core'

export default function App () {
  const [image, setImage] = useState()
  return (
    <MantineProvider theme={{ colorScheme: window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light' }} withGlobalStyles withNormalizeCSS>
      <AppShell
        padding='md'
        header={<Header height={60} p='lg'>Media Mantine</Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
        })}
      >
        <Text>
          <p>
            <a href='https://github.com/konsumer/media-mantine'>media-mantine</a> is a set of widgets for managing images/videos, with some examples of how to use them on your site.
          </p>
        </Text>
        <SimpleGrid spacing='lg' breakpoints={[{ minWidth: 'sm', cols: 2 }]}>
          <Card radius='md'>
            <ImageInput title='Single Image' value={image} onChange={setImage} />
          </Card>
          <Card radius='md'>
            <VideoInput title='Single Video' />
          </Card>
        </SimpleGrid>
      </AppShell>
    </MantineProvider>
  )
}
