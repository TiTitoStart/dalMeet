export const loadScript = (url, callback) => {
    const script = document.createElement('script')
    script.onload = () => callback()
    script.src = url
    document.body.appendChild(script)
}