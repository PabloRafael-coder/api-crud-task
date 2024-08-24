export function buildUrlParams(path) {
    const parameterPattern = /:([a-zA-Z]+)/g
    const parameterReplaced = path.replaceAll(parameterPattern, '(?<$1>[a-z0-9\-_]+)')

    const pathWithRegex = new RegExp(`^${parameterReplaced}`)

    return pathWithRegex
}