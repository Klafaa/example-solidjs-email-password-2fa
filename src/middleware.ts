import { createMiddleware } from "@solidjs/start/middleware";
import { RefillingTokenBucket } from "~/lib/server/rate-limit";
import {
  validateSessionToken,
  setSessionTokenCookie,
  deleteSessionTokenCookie,
} from "~/lib/server/session";
import { getCookie, setCookie } from "vinxi/http";

export default createMiddleware({
  onRequest: [
    (event) => {
      //   console.log("GLOBAL", event.request.url);
      const token = getCookie("session") ?? null;
      if (token === null) {
        event.locals.session = null;
        event.locals.user = null;
        // return resolve(event)
      }

      const { session, user } = validateSessionToken(token);
      if (session !== null) {
        setSessionTokenCookie(event, token, session.expiresAt);
      } else {
        deleteSessionTokenCookie(event);
      }

      event.locals.session = session;
      event.locals.user = user;
      //   return resolve(event);
    },
  ],
});
