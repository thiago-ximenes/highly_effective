export default class Container {
  private static instance: Container;
  private static dependencies: Map<any, any> = new Map();
  private static dynamicValues: Map<any, any> = new Map();

  private constructor() {}

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }

    return Container.instance;
  }

  public static setDependency(key: Symbol, value: any): Container {
    Container.dependencies.set(key, value);
    return Container.instance;
  }

  public setDependency(key: Symbol, value: any): Container {
    Container.dependencies.set(key, value);
    return Container.instance;
  }

  public getDependency<T = any>(key: Symbol): T {
    return Container.dependencies.get(key);
  }

  public static getDependency<T = any>(key: any): T {
    return Container.dependencies.get(key);
  }

  public static hasDependency(key: any): boolean {
    return Container.dependencies.has(key);
  }

  public static deleteDependency(key: any): boolean {
    return Container.dependencies.delete(key);
  }

  public static clearDependencies(): void {
    Container.dependencies.clear();
  }

  public static getDependencies(): Map<any, any> {
    return Container.dependencies;
  }

  public static setDependencies(dependencies: Map<any, any>): void {
    Container.dependencies = dependencies;
  }

  public static getDependenciesKeys(): Array<any> {
    return Array.from(Container.dependencies.keys());
  }

  public static getDependenciesValues(): Array<any> {
    return Array.from(Container.dependencies.values());
  }

  public static getDependenciesEntries(): Array<[any, any]> {
    return Array.from(Container.dependencies.entries());
  }

  public static getDependenciesSize(): number {
    return Container.dependencies.size;
  }

  public static forEachDependency(callback: (value: any, key: any, map: Map<any, any>) => void, thisArg?: any): void {
    Container.dependencies.forEach(callback, thisArg);
  }

  public static dependenciesKeys(): IterableIterator<any> {
    return Container.dependencies.keys();
  }

  public static dependenciesValues(): IterableIterator<any> {
    return Container.dependencies.values();
  }

  public static dependenciesEntries(): IterableIterator<[any, any]> {
    return Container.dependencies.entries();
  }

  public static dependenciesForEach(callback: (value: any, key: any, map: Map<any, any>) => void, thisArg?: any): void {
    Container.dependencies.forEach(callback, thisArg);
  }

  public static dependenciesClear(): void {
    Container.dependencies.clear();
  }

  public static setDynamicValue(key: Symbol, value: any): Container {
    Container.dynamicValues.set(key, value);
    return Container.instance;
  }

  public setDynamicValue(key: Symbol, value: any): Container {
    Container.dynamicValues.set(key, value);
    return Container.instance;
  }

  public getDynamicValue<T = any>(key: Symbol): T {
    return Container.dynamicValues.get(key);
  }

  public static getDynamicValue<T = any>(key: any): T {
    return Container.dynamicValues.get(key);
  }

  public static hasDynamicValue(key: any): boolean {
    return Container.dynamicValues.has(key);
  }

  public static deleteDynamicValue(key: any): boolean {
    return Container.dynamicValues.delete(key);
  }

  public static clearDynamicValues(): void {
    Container.dynamicValues.clear();
  }

  public static getDynamicValues(): Map<any, any> {
    return Container.dynamicValues;
  }

  public static setDynamicValues(dynamicValues: Map<any, any>): void {
    Container.dynamicValues = dynamicValues;
  }

  public static getDynamicValuesKeys(): Array<any> {
    return Array.from(Container.dynamicValues.keys());
  }

  public static getDynamicValuesValues(): Array<any> {
    return Array.from(Container.dynamicValues.values());
  }

  public static getDynamicValuesEntries(): Array<[any, any]> {
    return Array.from(Container.dynamicValues.entries());
  }

  public static getDynamicValuesSize(): number {
    return Container.dynamicValues.size;
  }

  public static forEachDynamicValue(callback: (value: any, key: any, map: Map<any, any>) => void, thisArg?: any): void {
    Container.dynamicValues.forEach(callback, thisArg);
  }

  public static dynamicValuesKeys(): IterableIterator<any> {
    return Container.dynamicValues.keys();
  }

  public static dynamicValuesValues(): IterableIterator<any> {
    return Container.dynamicValues.values();
  }

  public static dynamicValuesEntries(): IterableIterator<[any, any]> {
    return Container.dynamicValues.entries();
  }

  public static dynamicValuesForEach(callback: (value: any, key: any, map: Map<any, any>) => void, thisArg?: any): void {
    Container.dynamicValues.forEach(callback, thisArg);
  }

  public static dynamicValuesClear(): Container {
    Container.dynamicValues.clear();
    return Container.instance;
  }

  public static clear(): Container {
    Container.dependencies.clear();
    Container.dynamicValues.clear();
    return Container.instance;
  }

  public static clearAll(): void {
    Container.dependencies.clear();
    Container.dynamicValues.clear();
  }

  public static setToDynamic(callback: (container: Container) => {}): Container {
    callback(Container.instance);
    return Container.instance;
  }
}

