// hooks/useUpload.js
import { useMutation } from '@tanstack/react-query'

const uploadImage = async (file) => {
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    throw new Error('Image upload failed')
  }

  const data = await res.json()
  return data // could be the URL or file info from your server
}

const useUpload = () => {
  return useMutation({
    mutationFn: uploadImage,
  })
}

export default useUpload
