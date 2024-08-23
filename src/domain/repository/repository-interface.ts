export interface RepositoryInterface<T> {
    create(entity: T): Promise<T>;
}