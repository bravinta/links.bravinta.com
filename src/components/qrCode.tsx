import QR from "react-qr-code";

export const QRCode = () => {
  return (
    <div className="w-40 overflow-hidden rounded-lg">
      <QR
        size={256}
        level="H"
        className="w-full h-auto max-w-full"
        value={window.location.toString()}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};
