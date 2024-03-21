# --- deps stage --- #
FROM node:20-alpine AS deps

WORKDIR /usr/src/

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install


# --- builder stage --- #
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY --from=deps /usr/src/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

ENV PATH /usr/src/node_modules/.bin:$PATH

RUN npm run build


# --- runner stage --- #
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install sharp

COPY --from=builder /usr/src/app/.next/standalone ./.next/standalone
COPY --from=builder /usr/src/app/.next/static ./.next/standalone/.next/static
COPY --from=builder /usr/src/app/public ./.next/standalone/public

EXPOSE 3000

ENV PORT 3000

CMD ["node", ".next/standalone/server.js"]
