function status(request, response) {
  response.status(200).json({ chave: "Olááá!" });
}

export default status;
