export type todo = {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export type NextPageProps<T = Record<string, string>> = {
    /**
     * The path parameters received 
     * e.g. : page/[slug] --> params.slug
     */
    params: T,
    /**
     * The HTTP query parameters received
     * e.g. : my-page?page=1&order=asc --> searchParams.page and searchParams.order
     */
    searchParams: { [key: string]: string | string[] | undefined }
  };