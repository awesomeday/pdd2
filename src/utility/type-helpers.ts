type SetDifference<A, B> = A extends B ? never : A;
type SetComplement<A, A1 extends A> = SetDifference<A, A1>;

type Omit<T, K extends keyof T> = T extends any
    ? Pick<T, SetComplement<keyof T, K>>
    : never;

export type PropsType<T extends { props: any }> = Partial<Omit<T['props'], 'children'>>;
