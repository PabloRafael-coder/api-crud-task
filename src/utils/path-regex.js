export function pathRegex(path) {
    const routeParametersRegex = /:([a-zA-Z]*)/g
    const pathRegex = path.replaceAll(routeParametersRegex, '([a-z0-9\-_])')

    return pathRegex
}


