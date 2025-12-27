import { Compare } from "./ui/compare";

export default function FitnessCompareSection() {
  return (
    <section className="bg-gray-50 flex items-center py-10 sm:py-10 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-start text-xs sm:text-sm font-semibold tracking-wider text-gray-500 uppercase">
                BEFORE-AFTER
              </p>
              <h1 className="text-start text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                SHAPE BODY
              </h1>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-start text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
                Transform your body with our proven fitness programs. See real
                results from real people who have achieved their fitness goals
                through dedication and our expert guidance.
              </p>

              <p className="text-start text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                Our comprehensive approach combines personalized workout plans,
                nutrition guidance, and ongoing support to help you achieve the
                body transformation you've always wanted.
              </p>
            </div>
          </div>

          {/* Right Content - Compare Component */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[400px] lg:max-w-[700px]">
              <Compare
                firstImage="/assets/gym_before.jpg"
                secondImage="/assets/gym_after.jpg"
                firstImageClassName="object-cover object-center"
                secondImageClassname="object-cover object-center"
                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl shadow-2xl"
                slideMode="hover"
                initialSliderPercentage={50}
                showHandlebar={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
