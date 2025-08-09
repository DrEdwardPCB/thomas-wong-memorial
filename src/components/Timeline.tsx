import React from 'react'

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      date: 'April 25, 2001',
      title: 'Birth',
      description: '你還記得如何由小嬰孩蛻變成個子高高的青少年? 我彷彿都忘記了細節。曾經，孩子氣的我應該是很執著，很多抱怨，常要怪責其他人。我身邊有地上最強的母親，扭盡六壬，以愛以無比耐性擁抱我的嬰兒期、兒童期。父親是我最好生命導師，設計要上山下海的把我練成鋼鐵男兒。哥哥是我的領航員，陪伴激勵扶持我走每一步。 要是你們有緣認識我父母與哥哥，人生中有甚麼問題都可以試著請教他們，他們就好像一本百科全書，甚麼課題都會同你有深度詳談.'
    },
    {
      date: '2005',
      title: 'First F1 Race',
      description: '小學時期的摯友們，是我人生其中不可或缺的成長夥伴。只有我們知道彼此曾經如何幼稚，只有我們知道彼此如何突破成長的掙扎，活出成長為一個自己接受的一個自己。然後我們一起返教會，接受主基督為救主，是多大的祝福和恩典。'
    },
    {
      date: '2010',
      title: 'Karting Begins',
      description: '小學時期的摯友們，是我人生其中不可或缺的成長夥伴。只有我們知道彼此曾經如何幼稚，只有我們知道彼此如何突破成長的掙扎，活出成長為一個自己接受的一個自己。然後我們一起返教會，接受主基督為救主，是多大的祝福和恩典。'
    },
    {
      date: '2015',
      title: 'Racing Passion',
      description: '中學同學們，我是不是你們眼中的怪咖? 成長中，我們可能會是任何人眼中的怪咖。這段時間，信仰上在追求和辨識，學識中在追求原本屬於我的卓越，在電競上去尋找方向，音樂及事奉上我在學習如何為主付出。慢慢，我鋪出到一條屬于自己不一樣的路，你呢?'
    },
    {
      date: '2020',
      title: 'Formula 1 Dreams',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      date: 'August 3, 2025',
      title: 'Final Lap',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="timeline">
      <div className="px-4 mx-auto max-w-4xl">
        <h2 className="mb-16 text-4xl font-light text-center text-gray-800 md:text-5xl">
          Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-blue-600 to-yellow-500"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-6 h-6 bg-red-600 rounded-full flex items-center justify-center z-10 border-2 border-white shadow-md ${index % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                
                <div className={`mt-4 md:mt-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} flex-1`}>
                  <div className="p-6 bg-white rounded-lg border-l-4 border-red-600 shadow-sm">
                    <div className="mb-2 text-lg font-medium text-red-600">
                      {event.date}
                    </div>
                    <h3 className="mb-2 text-xl font-medium text-gray-800">
                      {event.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline 