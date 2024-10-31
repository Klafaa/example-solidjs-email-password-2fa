/// <reference types="@solidjs/start/env" />

import { Session } from "./lib/server/session";
import { User } from "./lib/server/user";

declare module "@solidjs/start/server" {
    export interface RequestEventLocals {
      user?: User | null;
      session?: Session | null;
    }
  }