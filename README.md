# Mr. ArtistA website
Static site for GitHub Pages. Upload all files to your repository root (delete the old `services.html` and old `images/favicon.svg`).

## Change phone, address, email
Open `js/site.js`, edit the first line (`S`). Address, hours and email stay hidden until you fill them in.

## Where to put your photos
Add `?guide` to any page address (example: `products.html?guide`) to see the file name each photo slot expects.
Use `.jpg`, about 1600 px wide, under 400 KB each (squoosh.app shrinks phone photos). File names must match exactly.

| Photo | Upload to |
|---|---|
| Product photos (3 per product; 01 is also the home page panel) | `images/products/<product>/01.jpg`, `02.jpg`, `03.jpg` |
| Our Work gallery (2 per product) | `images/gallery/<product>-1.jpg`, `<product>-2.jpg` |
| Store photos (About page) | `images/store/01.jpg` (large), `02.jpg`, `03.jpg` |

Product folder names: `artwood`, `resin-art`, `modular-interiors`, `mandir`, `premium-doors`, `sagwan`, `aluminium-glass`, `kids-toys`.
On GitHub: open the folder, choose Add file, Upload files. Until a photo exists, the slot shows a material swatch.

## Contact form
The form opens WhatsApp with the visitor's details filled in. For email delivery, create a free Formspree form and paste its URL into `endpoint` in `js/site.js`.

## Text
Product names and descriptions are in `js/site.js` (list `P`). Other text is in each `.html` file.
