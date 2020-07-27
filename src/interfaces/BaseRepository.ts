type BaseRepository = {
    save?: (params: any) => Promise<any>;
    delete: (params: any) => Promise<any>;
    add: (params: any) => Promise<any>;
    edit?: (params: any) => Promise<any>;
    get?: (params: any) => Promise<any>;
    getAll: (params?: any) => Promise<any>;
};

export default BaseRepository;
