import { Contents, Response } from "types/cms";
import fetch from "node-fetch";

type Payload = {
  endpoint: string;
  config: {
    headers: { [s: string]: string };
  };
};

const endpointUrl = process.env.CMS_ENDPOINT;
const config = {
  headers: {
    "X-API-KEY": process.env.CMS_API_KEY as string,
  },
};

export const api = async <T>({ endpoint, config }: Payload): Promise<T> => {
  const response = await fetch(endpoint, config);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  return json;
};

export const getContents = async (): Promise<Contents[]> => {
  const endpoint = `${endpointUrl}/article?limit=5`;
  const res = await api<Response>({ endpoint, config });

  return res.contents;
};

export const getEntry = async (entryId: string): Promise<Contents> => {
  const endpoint = `${endpointUrl}/article/${entryId}`;
  const res = await api<Contents>({ endpoint, config });

  return res;
};
