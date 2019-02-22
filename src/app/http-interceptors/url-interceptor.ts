import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class UrlInterceptor implements HttpInterceptor{
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    // const authToken = this.auth.getAuthorizationToken();

    /*
    * The verbose way:
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    */
    // Clone the request and set the new header in one step.
    // const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // send cloned request with header to the next handler.
    const baseUrl = 'https://cnodejs.org/api/v1'
    const prefixReq = req.clone({
      url: `${baseUrl}/${req.url}`
    });
    return next.handle(prefixReq);
  }
}
