import React from 'react';
import { useNavigate } from 'react-router-dom';

function Fastdiet() {

  const chartData1 = [
    { day: 'شنبه', description: 'صبحانه : نان و پنیر2-3لقمه\nنهار : برنج4-5قاشق +2قاشق خورش دلخواه\nشام : بوراني سبزیجات فصلیک کاسه متوسط' },
    { day: 'یكشنبه', description: 'صبحانه : شیر1استكان كوچك + ساقه طالئي\nنهار : كتلت یا كوكوي سیب زمیني2عدد+2-3لقمه نان\nشام : ساالد فصل یک کاسه متوسط' },
    { day: 'دو شنبه', description: 'صبحانه : چاي + ساقه طالئي2-3عدد\nنهار : خوراك قارچ یک لیوان\nشام : ماست و خیار 1 كاسه متوسط' },
    { day: 'سه شنبه', description: 'صبحانه : نان و پنیر2-3لقمه\nنهار : تخم مرغ ّآب پز یکعدد+گوجه فرنگی یکعدد\nشام : سوپ جو و گوجهیک لیوان' },
    { day: 'چهار شنبه', description: 'صبحانه : شیر یك فنجان + خرما2عدد\nنهار : سبزي پلو نصف كف گیر+1قاشق ماهي تن یا ماست1كاسه متوسط\nشام : ساالدكلم برگ یک کاسه متوسط' },
    { day: 'پنج شنبه', description: 'صبحانه : میوه2عدد\nنهار : املت3-2قاشق+ نان4-3لقمه\nشام : ماست و خیاریک لیوان' },
    { day: 'جمعه', description: 'صبحانه : نان و پنیر2-3لقمه\nنهار : خوراك قارچ یک لیوان\nشام : سوپ یا آش رقیق و كم حبوباتیک لیوان' },
  ];

  const chartData2 = [
    { day: 'شنبه', description: 'صبحانه : نان و پنیر3-4لقمه+ گردو1عدد\nنهار : آش ماش یک لیوان\nشام : بوراني سبزیجات فصلیک کاسه متوسط' },
    { day: 'یكشنبه', description: 'صبحانه : شیر1فنجان+خرما2عدد\nنهار : تخم مرغ آب پز1عدد+3-4لقمه نان + گوجه فرنگي1عدد\nشام : سوپ یا آش رقیق یك لیوان' },
    { day: 'دو شنبه', description: 'صبحانه : چاي + ساقه طالئي3عدد\nنهار : مرغ آب پز یا كبابي یك ران یا نصف سینه+ سبزیجات پخته\nشام : قارچ آب پز یا كبابي متوسط3-4عدد' },
    { day: 'سه شنبه', description: 'صبحانه : نان و پنیر3-4لقمه\nنهار : برنج4قاشق غذا خوري+ خورش كرفسکم چرب دوقاشق\nشام : ماست یك كاسه متوسط+2لقمه نان' },
    { day: 'چهار شنبه', description: 'صبحانه : شیر1فنجان+ ساقه طالئي دو عدد\nنهار : پوره مرغیک لیوان\nشام : سوپ جو و گوجهیک لیوان' },
    { day: 'پنج شنبه', description: 'صبحانه : نان و پنیر2-3لقمه\nنهار : مرغ آب پز+ نان2-3لقمه\nشام : سوپ سبزیجات یک الی دو لیوان' },
    { day: 'جمعه', description: 'صبحانه : شیر1استكان كوچك+ ساقه طالئي دو عدد\nنهار : 4-5قاشق غذاي عادي ولي كم چرب\nشام : بوراني سبزیجات فصل یک کاسه متوسط' },
  ];

  const chartData3 = [
    { day: 'صبحانه', description: 'شیر یک فنجان یا پنیریک قوطی کبریت+یک کف دست نان سنگک' },
    { day: 'نهار', description: 'یکصد گرم گوشت سفید مرغیا ماهی کبابی یا آب پز' },
    { day: 'شام', description: 'یکعدد تخم مرغ آب پز+یکعدد گوجه' },
  ];
  function goback() {
    navigate('/menu')
  }

  const navigate = useNavigate();

  return (
    <div className='pkgcont'>
      <button className='backbutton' onClick={goback}>بازگشت</button>
      <h2 className='pkgwarn'>! توجه</h2>
      <h3 className='pkgtitle'>این برنامه برای کسانی توصیه می‌شود که بیماری حاد و کنترل نشده نداشته باشند و یا با مشورت و اجازه پزشک معالج خود شروع نمایند</h3>
      <p className='pkgcomment'>
        برنامه کاهش وزن سریع درصورتی بهترین نتیجه را میدهد که به برنامه ایمان داشته باشید و دقیق و بی کم و کاست رعایت نمایید. لطفا برنامه را به سلیقه خود تغییر ندهید. مصرف داروی توصیه شده الزامی است. این برنامه حاصل سالها تجربه است و سعی شده بی نقص ارائه شود عالرغم آن ممکن است مشکلی پیش بیاید که در اینصورت در اینستاگرام مطب طرح نمایید تا رفع گردد. این برنامه دارای چند بخش به قرار زیر هست که پس از تهیه دارو برنامه را اجرا نمایید
      </p>
      <h3 className='pkgtitle'>دارو ها</h3>
      <p className='pkgcomment'>
        " کپسول النزوپرازول 30 ناشتا و قبل شام یکعدد " حتی اگر مشکل گوارشی ندارید باید مصرف کنید
        <br/>
        کپسول گرین لسصبح و عصر یکعدد
        <br/>
        کپسول مولتی ویتامین یک روز درمیان یکعدد
      </p>
      <p className='pkgcomment'>
        درصورت بروز یبوست قرصملین مثلسنالین یاکپسولروالکسوحتی هردوباهم توصیه میشود اجابت مزاج باید نرم و راحت باشد
      </p>
      <p className='pkgcomment'>
        طی رژیم درمانی ورزش ضروریاست وکمک شایانیدرسرعتکاهش وزن دارد .پیاده روی تند–تردمیل–رقصیدن–درجا دویدن–حلقه زدن و
      </p>

      <h3 className='pkgtitle'>:هفته اول</h3>
      <p className='pkgcomment'>
        هر وعده غذایی می تواند2نوبت در هفته تکرار شود و جایگزین غذای دیگر شود
      </p>
      {/* Chart */}
      <div className="chart-container">
        {chartData1.map((data, index) => (
          <div key={index} className="chart-row">
            <div className="chart-left">
              <div>{data.description.split('\n').map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}</div>
            </div>
            <div className="chart-right">{data.day}</div>
          </div>
        ))}
      </div>

      <h3 className='pkgtitle'>:هفته دوم</h3>
      <h3 className='pkgtitle'>
        رژیم قبل به همراه رژیم لبنیات طبق دستور ذیل رعایت شود
      </h3>
      <h3 className='pkgtitle'>
        : هفته سوم
      </h3>
      <p className='pkgcomment'>
      رژیم 2 + رژیم شیر و عسل
      </p>
      {/* Chart */}
      <div className="chart-container">
        {chartData2.map((data, index) => (
          <div key={index} className="chart-row">
            <div className="chart-left">
              <div>{data.description.split('\n').map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}</div>
            </div>
            <div className="chart-right">{data.day}</div>
          </div>
        ))}
      </div>
      <h3 className='pkgtitle'>
      : برنامه شیر و عسل برای سه روز متوالی
      </h3>
      <p className='pkgcomment'>
      روزانه4تا6لیوان شیر كم چرب + یك قاشق مربا خوري عسلیا دو عدد خرما
      با هر لیوانمیل شود.( درصورتی که با شیر مشکل دارید از ماست+شیره انگوریا
      خرمااستفاده نمایید )
      در طول این سه روزفقط مصرف آبو چای کمرنگو قهوه تلخمجاز است
      </p>
      <h3 className='pkgtitle'>
      : هفته چهارم
      </h3>
      <h3 className='pkgcomment'>
      سه روز اولهفته چهارم
      </h3>
      <p className='pkgcomment'>
       آبمیوه تازه133نصف لیوانه هر سی سی2ساعت
       <br/>
        آب کرفس133نصف لیوانه هر سی سی2ساعت
        <br/>
        بادام2عدد هر2ساعت
      </p>
      <h3 className='pkgtitle'>
        چهار 
        روز دوم هفته چهارم
      </h3>
      <p className='pkgtitle'>
      رژیم پروتئین
      </p>
      {/* Chart */}
      <div className="chart-container">
        {chartData3.map((data, index) => (
          <div key={index} className="chart-row">
            <div className="chart-left">
              <div>{data.description.split('\n').map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}</div>
            </div>
            <div className="chart-right">{data.day}</div>
          </div>
        ))}
      </div>
      <p className='pkgcomment'>
      اگر نتیجه مطلوب حاصل نشد میتوانید پس از رژیم پروتئیین رژیم شیر و
عسل را تکرار نمایید
      </p>
      <h3 className='pkgtitle'>
      میان وعده
      </h3>
      <p className='pkgcomment'>
      طی رژیم فوری روزانه سه بارمجاز به استفاده از میان وعده هستید که هر بار
میتواند فقط یکی از موارد ذیل باش
      </p>
      <p className='pkgcomment'>
        یک واحد میوه
        <br/>
        سوپ سبزیجات کلینیک یک لیوان233میلی لیتره
        <br/>
        دو عدد بیسکوئیت ساقه طالیی
      </p>
      <h3 className='pkgtitle'>
      سوپ سبزیجات کلینیک
      </h3>
      
    </div>
  );
}

export default Fastdiet;
