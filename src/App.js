import { useState } from "react";

export default function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://www.netstager.com/mail_signature/ujwal/ujwal2.png"
  );
  const [name, setName] = useState("UJWAL HR");
  const [position, setPosition] = useState("Head of Operations");
  const [personalPhone, setPersonalPhone] = useState("+91 9947886699");

  const signatureHTML = `
<table width="724" cellspacing="0" cellpadding="0" style="color:#000; font-family:'Google Sans Flex', sans-serif;font-optical-sizing:auto;">
  <tr>
    <td align="left">
      <table width="724" cellspacing="0" cellpadding="0">
        <tr>
          <td width="160" valign="top">
            <img src="${imageUrl}" width="160" height="181" />
          </td>

          <td width="30" align="center">
            <table>
              <tr>
                <td style="height:180px;border-right:1px solid #c3c3c3;display:block"></td>
              </tr>
            </table>
          </td>

          <td width="324">
            <table>
              <tr>
                <td colspan="2">
                  <p style="margin:0;font-weight:700;font-size:16px;text-transform:uppercase">
                    ${name}
                  </p>
                  <p style="margin:0;font-weight:600;color:#A3A3A3;font-size:12px">
                    ${position}
                  </p>
                </td>
              </tr>

              <tr>
                <td><img src="https://www.netstager.com/mail_signature/images/phone.png" width="24" /></td>
                <td>
                  <a href="tel:${personalPhone}" style="text-decoration:none;color:#000">
                    <p style="margin:0;font-size:13px;text-transform:uppercase">${personalPhone}</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td><img src="https://www.netstager.com/mail_signature/images/mobile.png" width="24" /></td>
                <td>
                  <a href="tel:+918448440112" style="text-decoration:none;color:#000">
                    <p style="margin:0;font-size:13px;text-transform:uppercase">
                      +91 844 844 0112
                    </p>
                  </a>
                </td>
              </tr>

              <tr>
                <td><img src="https://www.netstager.com/mail_signature/images/web.png" width="24" /></td>
                <td>
                  <a href="https://www.netstager.com" style="text-decoration:none;color:#000">
                    <p style="margin:0;font-size:13px">www.netstager.com</p>
                  </a>
                </td>
              </tr>

              <tr>
                <td valign="top"><img src="https://www.netstager.com/mail_signature/images/location.png" width="24" /></td>
                <td>
                  <p style="margin:0;font-size:13px">
                    UL Cyberpark, Calicut, Kerala, India, 673016.
                  </p>
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td><img src="https://www.netstager.com/mail_signature/images/facebook-w.png" width="28" /></td>
                <td><img src="https://www.netstager.com/mail_signature/images/instagram-w.png" width="28" /></td>
                <td><img src="https://www.netstager.com/mail_signature/images/x-w.png" width="28" /></td>
                <td><img src="https://www.netstager.com/mail_signature/images/linkdin-w.png" width="28" /></td>
              </tr>
            </table>
          </td>

          <td width="200" align="center">
            <img src="https://www.netstager.com/mail_signature/images/logo-w.png" width="152" height="34" />
            <br />
            <img src="https://www.netstager.com/mail_signature/images/partners-w.gif" width="106" height="93" />
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`;

const copyHTML = () => {
  const textarea = document.createElement("textarea");
  textarea.value = signatureHTML;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  try {
    document.execCommand("copy");
    alert("Exact signature HTML copied");
  } catch (err) {
    alert("Copy failed. Please try again.");
  }

  document.body.removeChild(textarea);
};


  return (
    <div style={{ padding: 24 }}>
      <h2>Email Signature Generator</h2>

      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" />
      <br /><br />
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <br /><br />
      <input value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
      <br /><br />
      <input value={personalPhone} onChange={(e) => setPersonalPhone(e.target.value)} placeholder="Personal Phone" />
      <br /><br />

      <button onClick={copyHTML}>Copy HTML</button>

      <h3>Preview (Exact)</h3>
      <div dangerouslySetInnerHTML={{ __html: signatureHTML }} />
    </div>
  );
}
