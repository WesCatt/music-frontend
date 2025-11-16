import api, {baseURL} from "@/common/utils/http/index.ts";

function joinPath(name: string, path: string) {
    if (path[0] === '/') path = path.slice(1);
    if (name[name.length - 1] === '/') name = name.slice(0, -1);
    if (path && name[name.length - 1] !== '/') name += '/';


    return name + path;
}


export function createApi(name: string) {

    return {
        get: (path: string, opt?: any) =>
            api.get(joinPath(name, path), opt),
        post: (path: string, opt?: any, config?: any) =>
            api.post(joinPath(name, path), opt, config),
        delete: (path: string, opt?: any) =>
            api.delete(joinPath(name, path), opt),
        patch: (path: string, opt?: any, config?: any) =>
            api.patch(joinPath(name, path), opt, config),
        put: (path: string, opt?: any, config?: any) =>
            api.put(joinPath(name, path), opt, config),
        url: (path: string) => `${baseURL}/${joinPath(name, path)}`,
    };
}