export function emailTemplate({
                                  title,
                                  content,
                              }: {
    title: string;
    content: string;
}) {


    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background:#f9f9f9;">
    
      <div style="background:#fff; padding:20px; border-radius:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
        <h2 style="color:#4CAF50; margin-top:0;">${title}</h2>
        ${content}
      </div>
      <footer style="text-align:center; font-size:12px; color:#777; margin-top:20px;">
        <p>© ${new Date().getFullYear()} Tamasru Pain. All rights reserved.</p>
      </footer>
    </div>
  `;
}
