declare let coating: {
    (func: Function, thisArg?: any): Function;
    functional: (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
};
export = coating;
