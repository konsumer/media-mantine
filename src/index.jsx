import { InputWrapper, Group, Text, useMantineTheme } from '@mantine/core'
import { Upload, Photo, DeviceTv, X } from 'tabler-icons-react'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'

const VIDEO_MIME_TYPE = ['video/mp4', 'video/x-ms-wmv', 'video/x-msvideo', 'video/quicktime', 'video/3gpp']

function getIconColor (status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
    : status.rejected
      ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7]
}

function ImageUploadIcon ({ icon = Photo, status, ...props }) {
  if (status.accepted) {
    return <Upload {...props} />
  }

  if (status.rejected) {
    return <X {...props} />
  }

  const Icon = icon
  return <Icon {...props} />
}

export const DropzoneShow = ({ icon = Photo, status, label, help }) => {
  const theme = useMantineTheme()
  return (
    <Group position='center' spacing='xl' style={{ minHeight: 100, pointerEvents: 'none' }}>
      <ImageUploadIcon icon={icon} status={status} style={{ color: getIconColor(status, theme) }} size={80} />
      <div>
        <Text size='xl' inline>
          {label}
        </Text>
        <Text size='sm' color='dimmed' inline mt={7}>
          {help}
        </Text>
      </div>
    </Group>
  )
}

const noop = () => {}

export const ImageInput = ({ maxSize = 3 * 1024 ** 2, accept = IMAGE_MIME_TYPE, value, onChange = noop, onReject = noop, icon = Photo, title, label = 'Drag an image here or click to select files.', help = 'Your image will be automatically processed.' }) => {
  return (
    <InputWrapper label={title}>
      <Dropzone
        onDrop={onChange}
        onReject={onReject}
        maxSize={maxSize}
        accept={accept}
      >
        {(status) => (<DropzoneShow icon={icon} status={status} label={label} help={help} />)}
      </Dropzone>
    </InputWrapper>
  )
}

export const VideoInput = ({ maxSize = 3 * 1024 ** 2, accept = VIDEO_MIME_TYPE, value, onChange = noop, onReject = noop, icon = DeviceTv, title, label = 'Drag a video here or click to select files.', help = 'Your video will be automatically processed.' }) => {
  return (
    <InputWrapper label={title}>
      <Dropzone
        onDrop={onChange}
        onReject={onReject}
        maxSize={maxSize}
        accept={accept}
      >
        {(status) => (<DropzoneShow icon={icon} status={status} label={label} help={help} />)}
      </Dropzone>
    </InputWrapper>
  )
}
