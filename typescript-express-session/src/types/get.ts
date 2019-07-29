/**
 * Lookup types を使用して、 path, request, response の整合性を保つ
 */

export interface GET {
  '/user/greet/:id': {
    req: { params: { id: string }},
    res: { message: string }
  }
}
