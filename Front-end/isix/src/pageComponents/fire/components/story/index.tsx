import Link from 'next/link';

export default function Fire() {
  return (
    <div style={{backgroundColor:'skyblue'}} className="tags">
      <div className="">
        <div className="">
          <p className="">유치원 | </p>
          <input type="text" />
        </div>
      </div>
      <div>
        <div className="">
          <p className="">반 이름 | </p>
          <input type="text" />
        </div>
      </div>
      <div>
        <Link href='/main' prefetch={true} passHref> 
          시작하기
        </Link> 
      </div>
    </div>
  );
}
