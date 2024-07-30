import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

type ScrollEffectOptions = {
  borderRadius?: { min: string; max: string };
  opacity?: { min: number; max: number };
  translateY?: { min: string; max: string };
  scale?: { min: number; max: number };
  transitionDuration?: string;
  threshold?: number; // Added option for mode
};

export function useScrollEffect(options: ScrollEffectOptions) {
  const element = ref<HTMLDivElement | null>(null);
  const borderRadius = ref<string>(options.borderRadius?.min || '0px');
  const opacity = ref<number>(options.opacity?.min || 0);
  const translateY = ref<string>(options.translateY?.min || '0px');
  const scale = ref<number>(options.scale?.max || 1);

  const style = computed(() => {
    const baseStyle: { [key: string]: string | number } = {
      transition: `all ${options.transitionDuration || '0.2s'} ease-out`
    };

    if (options.borderRadius) {
      baseStyle.borderRadius = `${borderRadius.value} ${borderRadius.value} 0px 0px`;
    }
    if (options.opacity) {
      baseStyle.opacity = opacity.value;
      baseStyle.transform = `translateY(${translateY.value})`;
    }
    if (options.translateY) {
      baseStyle.transform = `translateY(${translateY.value})`;
    }
    if (options.scale) {
      baseStyle.transform = `scale(${scale.value})`;
    }

    return baseStyle;
  });

  const updateStyles = () => {
    if (element.value) {
      const boundingRect = element.value.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (options.threshold) {
        const threshold = viewportHeight * options.threshold;
        const thresholdCrossed = boundingRect.top < threshold;
        if (options.borderRadius) {
          borderRadius.value = thresholdCrossed
            ? options.borderRadius?.max || '80px'
            : options.borderRadius?.min || '0px';
        }
        if (options.opacity) {
          opacity.value = thresholdCrossed ? options.opacity?.max || 1 : options.opacity?.min || 0;
          translateY.value = thresholdCrossed
            ? options.translateY?.min || '0px'
            : options.translateY?.max || '50px';
        }
        if (options.scale) {
          scale.value = thresholdCrossed ? options.scale?.max || 1 : options.scale?.min || 0.7;
        }
      } else {
        const elementCenter = boundingRect.top + boundingRect.height / 2;
        const normalizedPosition = Math.min(
          Math.max((viewportHeight - elementCenter) / viewportHeight, 0),
          1
        );

        if (options.borderRadius) {
          borderRadius.value = `${normalizedPosition * (parseFloat(options.borderRadius?.max || '80px') - parseFloat(options.borderRadius?.min || '0px')) + parseFloat(options.borderRadius?.min || '0px')}px`;
        }
        if (options.opacity) {
          opacity.value =
            normalizedPosition * ((options.opacity?.max || 1) - (options.opacity?.min || 0)) +
            (options.opacity?.min || 0);
          translateY.value = `${normalizedPosition * (parseFloat(options.translateY?.max || '50px') - parseFloat(options.translateY?.min || '0px')) + parseFloat(options.translateY?.min || '0px')}px`;
        }
        if (options.scale) {
          scale.value =
            normalizedPosition * ((options.scale?.max || 1) - (options.scale?.min || 0.7)) +
            (options.scale?.min || 0.7);
        }
      }
    }
  };

  onMounted(() => {
    updateStyles();
    window.addEventListener('scroll', updateStyles);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateStyles);
  });

  return { element, style };
}
