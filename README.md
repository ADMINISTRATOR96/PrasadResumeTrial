# Prasad Khandale Portfolio - khandale.online

This is a GitHub Pages ready static portfolio website for **Prasad Rajesh Khandale**.

## Files
- `index.html` - main portfolio page
- `styles.css` - premium dark theme styling
- `script.js` - animations, counters, mobile menu, dark/light mode
- `thanks.html` - success page after contact form submission
- `CNAME` - custom domain file for GitHub Pages

## Custom Domain
The `CNAME` file already contains:

```text
khandale.online
```

## Contact Form
The contact form uses FormSubmit and sends queries to:

```text
prasadkhandale96@gmail.com
```

Important: First time you submit the form, FormSubmit may send a confirmation email. Open that email and verify. After that, messages will be delivered normally.

## GitHub Pages Steps
1. Create or open your GitHub repository.
2. Upload all files to the root of the repository.
3. Go to Settings > Pages.
4. Source: Deploy from branch.
5. Branch: main, Folder: /root.
6. Save.
7. Add DNS records at your domain provider for GitHub Pages.

## DNS Records for khandale.online
For apex/root domain, add GitHub Pages A records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For www subdomain, add CNAME:

```text
www -> your-github-username.github.io
```

Replace `your-github-username` with your GitHub username.

## Privacy Note
Exact home address, date of birth, and father's name are not displayed on the public website for security and privacy.
