module.exports = {
  encodingExists: () => true,
  decode: (buf, enc) => new TextDecoder(enc || 'utf-8').decode(buf),
  getDecoder: (enc) => {
    const d = new TextDecoder(enc || 'utf-8');
    return { write: (b) => d.decode(b, { stream: true }), end: () => d.decode() };
  },
};