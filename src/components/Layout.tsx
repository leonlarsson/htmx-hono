export default ({ children }: { children: any }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>HTMX + Hono</title>
      </head>

      <body>
        <div class="container mx-auto p-4">
          <h1 class="mb-4 text-4xl font-bold">
            <a href="/">Todo</a>
          </h1>
          {children}
        </div>
      </body>
    </html>
  );
};
