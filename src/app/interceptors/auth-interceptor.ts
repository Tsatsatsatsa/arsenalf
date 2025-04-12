import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req,next,'auth')

  const excludedUrls = ['auth/login', 'user'];
  
  if (excludedUrls.some(url => req.url.includes(url))) {
    return next(req); // Skip adding token
  }

  const authToken = localStorage.getItem('auth_token');

  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(authReq);
  }

  return next(req);
};