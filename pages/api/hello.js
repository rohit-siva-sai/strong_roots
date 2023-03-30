// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req);
  

  const {pis} = req.query
  res.status(200).json({ name: pis,class: "dgvehvg" })
}
