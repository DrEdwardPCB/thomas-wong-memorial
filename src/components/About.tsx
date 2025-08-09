import React from 'react'

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="px-4 mx-auto max-w-6xl">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">
          About Thomas
        </h2>
        
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div className="space-y-6">
            <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-red-600">
              <p className="text-lg leading-relaxed text-gray-700">
              我不要獨佔你們的祝福，眼淚流過後，謹記要好好走你們的旅程，要讓你們的一生也精彩，在天上離你們遠一點的我，在你們樂意並需要時，我也要像以往一樣笑微微的繼續聽你們分享經歷旅程中的樂與悲。
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-lg leading-relaxed text-gray-700">
              我在這裡的24年，是場精彩的旅程，每個人的步伐不一樣，沿途風景不一樣，認識的人不一樣。多謝你們來到這裡懷念我，你會驚訝在這奇妙旅程的每一段落中，每個王顥銘都不很一樣。記得要開開心心的想起我，帶著快快樂樂的回憶走下去。讓你的未來也有我的助攻，那就不枉我們相識一場。
              </p>
            </div>
            
            <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
              <p className="text-lg leading-relaxed text-gray-700">
              我沒有把你們擱在旅程中的任何地方，只是換個身份，換個角度，仍然在一起。
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="p-8 bg-gray-100 rounded-lg border-2 border-gray-300 border-dashed">
              <p className="mb-2 text-lg text-gray-600">About Photo</p>
              <small className="text-gray-500">Add a photo of Thomas here</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 