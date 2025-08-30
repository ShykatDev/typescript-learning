const makeQuery = (
    url: string,
    opts?:{
        method?: string,
        headers?: {
            [key: string]: string ;
        };
        body?: string ;
    }
) => {}

// type MakeQueryParams = unknown;
type MakeQueryParams = Parameters<typeof makeQuery>;
type MakeQueryParamsSecondArgument = MakeQueryParams[1];
