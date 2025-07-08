import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AboutusCard = ({ title, imageSrc, description }) => {
  return (
    <Card className="w-full h-full bg-gray-200 gap-0 py-2 m-0">
      <CardHeader className="items-center justify-center mb-1">
        <CardTitle className="text-center text-sm my-2">{title}</CardTitle>
        <div className="flex justify-center w-full aspect-4/3 rounded-lg item-center">
          <img src={imageSrc} alt={title} className="h-24" />
        </div>
      </CardHeader>
      <CardContent className="p-2 mt-0 text-sm">
        <p className="text-sm text-center text-black">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AboutusCard;