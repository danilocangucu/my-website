// FloppyDiskUtils.ts
export const floppyDiskButtonStyles: React.CSSProperties = {
  position: "sticky",
  bottom: "var(--space-l-3xl)",
  marginRight: "calc(-1 * var(--space-s))",
  marginTop: "var(--space-2xs)",
  left: "100vw",
  padding: "var(--space-3xs) var(--space-2xs)",
};

export const starSpinning = (floppyDisk: HTMLElement | null) => {
  if (floppyDisk) {
    floppyDisk.classList.add("spin-animation");
  }
};

export const stopSpinning = (floppyDisk: HTMLElement | null) => {
  if (floppyDisk) {
    floppyDisk.classList.remove("spin-animation");
  }
};

export const triggerFadeOut = (floppyDisk: HTMLElement | null) => {
  if (floppyDisk) {
    floppyDisk.classList.add("fade-out");
  }
};

export const insertThumb = (floppyDisk: HTMLElement | null, thumb: string) => {
  if (floppyDisk) {
    floppyDisk.innerHTML = "";
    floppyDisk.innerHTML = thumb;
    floppyDisk.classList.add("fade-in");
    floppyDisk.classList.remove("fade-out");

    setTimeout(() => {
      floppyDisk.classList.remove("fade-in");
      triggerFadeOut(floppyDisk);
      insertFloppyDisk(floppyDisk, thumb === "👍🏾");
    }, 2000);
  }
};

export const insertFloppyDisk = (
  floppyDisk: HTMLElement | null,
  isSuccess: boolean
) => {
  if (floppyDisk) {
    setTimeout(() => {
      floppyDisk.innerHTML = "";
      floppyDisk.innerHTML = "💾";
      floppyDisk.classList.add("fade-in");
      floppyDisk.classList.remove("fade-out");
      setTimeout(() => {
        floppyDisk.classList.remove("fade-in");
        if (isSuccess) {
          const floppyDiskButton =
            document.getElementById("floppy-disk-button");
          enableFloppyDiskButton(floppyDiskButton);
        }
      }, 500);
    }, 500);
  }
};

export const enableFloppyDiskButton = (
  floppyDiskButton: HTMLElement | null
) => {
  if (floppyDiskButton) {
    (floppyDiskButton as HTMLButtonElement).disabled = false;
    floppyDiskButton.classList.remove("button--disabled");
  }
};

export const endFloppyDiskAnimation = (
  startTime: number,
  isSuccess: boolean
) => {
  const floppyDiskSpan = document.getElementById("floppy-disk-span");

  const thumb = isSuccess ? "👍🏾" : "👎🏾";
  // TODO button could have a background color for isSuccess or !isSuccess
  const elapsedTime = Date.now() - startTime;
  const remainingTime = 500 - (elapsedTime % 500);

  setTimeout(() => {
    stopSpinning(floppyDiskSpan);
    triggerFadeOut(floppyDiskSpan);
    setTimeout(() => {
      insertThumb(floppyDiskSpan, thumb);
    }, 300);
  }, remainingTime);
};

export const startFloppyDiskAnimation = () => {
  const floppyDiskSpan = document.getElementById("floppy-disk-span");
  const floppyDiskButton = document.getElementById("floppy-disk-button");

  if (floppyDiskButton) {
    (floppyDiskButton as HTMLButtonElement).disabled = true;
    floppyDiskButton.classList.add("button--disabled");
  }

  starSpinning(floppyDiskSpan);
  return Date.now();
};
