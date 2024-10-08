import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { JSX, SVGProps } from "react";

interface EpisodeProps {
  title: string;
  thumbnailUrl: string;
  duration: string;
  releaseDate: string;
  description: string;
  watchUrl: string;
}

const Episode: React.FC<EpisodeProps> = ({
  title,
  thumbnailUrl,
  duration,
  releaseDate,
  description,
  watchUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Spring animation for dialog appearance
  const dialogSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "scale(1)" : "scale(0.95)",
    config: { tension: 300, friction: 20 }, // Configure spring animation
  });

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div
            className="grid gap-4 rounded-lg bg-white p-4 shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer"
            onClick={handleOpen}
          >
            <div className="relative aspect-video overflow-hidden rounded-md">
              <img
                src={thumbnailUrl}
                alt={`${title} Thumbnail`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
                style={{ aspectRatio: "800/450", objectFit: "cover" }}
              />
            </div>
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
              <p className="text-muted-foreground line-clamp-2">
                {description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClockIcon className="h-4 w-4" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{releaseDate}</span>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[800px] bg-white">
          <animated.div style={dialogSpring}>
            <div className="grid gap-4 rounded-lg bg-white p-4">
              <div className="relative aspect-video overflow-hidden rounded-md">
                <img
                  src={thumbnailUrl}
                  alt={`${title} Thumbnail`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "800/450", objectFit: "cover" }}
                />
              </div>
              <div className="grid gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>{duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{releaseDate}</span>
                  </div>
                </div>
                <div className="flex justify-start items-start">
                  <a
                    href={watchUrl}
                    target="_blank"
                    className="bg-black text-white text-center px-7 py-2 mt-2 rounded-md whitespace-nowrap select-none hover:opacity-80 transition ease-in-out "
                    rel="noreferrer"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </div>
          </animated.div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
function CalendarIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default Episode;
