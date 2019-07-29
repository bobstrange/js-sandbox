import Express from 'express'
import { HttpError } from 'http-errors'
import { GET } from './get'
import { IRouterHandler } from 'express-serve-static-core';

/**
 * Expressの型を拡張する
 */
declare module 'express' {
  interface RequestParams {
    query?: any
    params?: any
    body?: any
  }

  interface ExpandedRequest<T extends Express.RequestParams> {
    query: T['query']
    params: T['params']
    body: T['body']
  }

  interface ExpandedResponse<T extends Express.Response> {
    send: (body?: T) => ExpandedResponse<T>
  }

  interface ExpandedNextFunction {
    (err?: HttpError): void
  }

  interface ExpandedRequestHandler<T extends { req?: any, res?: any }> {
    (
      req: ExpandedRequest<T['req']>,
      res: ExpandedResponse<T['res']>,
      next: ExpandedNextFunction
    ): any
  }

  interface Application {
    get: (<P extends keyof GET>(
      path: P,
      ...requestHandlers: ExpandedRequestHandler<GET[P]>[]
    ) => any) & IRouterHandler<this>
  }
}
