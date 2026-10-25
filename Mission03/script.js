let lions = [
    {
        name: '김사자',
        role: 'FRONTEND',
        description: '사용하기 편하면서도 깔끔한 웹 인터페이스를 만드는 것을 좋아합니다.',
        profileImgLink: 'https://i.pinimg.com/736x/56/63/07/566307a5440f114658a9e473db0c80be.jpg',
        contacts: {
            email: 'lion.kim@example.com',
            phone: '010-2847-1356',
            web: 'https://kimlion.dev'
        },
        techStack: ['React', 'TypeScript', 'Tailwind CSS'],
        catchphrase: '작은 디테일이 좋은 경험을 만든다고 생각합니다.'
    },
    {
        name: '이사자',
        role: 'FRONTEND',
        description: '사용자와 가장 가까운 화면을 만들며 자연스러운 인터랙션을 구현하는 데 관심이 많습니다.',
        profileImgLink: 'https://i.pinimg.com/736x/ce/7f/82/ce7f82c376387ab8a56a645ba73391d7.jpg',
        contacts: {
            email: 'lion.lee@example.com',
            phone: '010-7312-4895',
            web: 'https://leelion.dev'
        },
        techStack: ['Vue.js', 'JavaScript', 'GSAP'],
        catchphrase: '보기 좋은 것보다 쓰기 좋은 화면을 만들고 싶습니다.'
    },
    {
        name: '박사자',
        role: 'FRONTEND',
        description: '다양한 기기에서도 자연스럽게 동작하는 반응형 웹 개발을 공부하고 있습니다.',
        profileImgLink: 'https://i.pinimg.com/1200x/ff/86/1b/ff861b3ae5e61bf6428bc8937b0b7041.jpg',
        contacts: {
            email: 'lion.park@example.com',
            phone: '010-5924-7631',
            web: 'https://parklion.dev'
        },
        techStack: ['Next.js', 'CSS', 'Zustand'],
        catchphrase: '오늘의 한 줄이 내일의 서비스가 됩니다.'
    },
    {
        name: '최사자',
        role: 'BACKEND',
        description: '안정적인 서버 구조와 효율적인 데이터 처리를 고민하는 백엔드 개발자입니다.',
        profileImgLink: 'https://i.pinimg.com/736x/05/70/50/057050839ae445167b9c382c030dc9ea.jpg',
        contacts: {
            email: 'lion.choi@example.com',
            phone: '010-8461-2057',
            web: 'https://choilion.dev'
        },
        techStack: ['Spring Boot', 'Java', 'MySQL'],
        catchphrase: '보이지 않는 곳까지 탄탄하게 만들겠습니다.'
    },
    {
        name: '정사자',
        role: 'BACKEND',
        description: 'API 설계와 데이터베이스 구조를 개선하며 확장 가능한 서비스를 만드는 데 관심이 있습니다.',
        profileImgLink: 'https://i.pinimg.com/736x/cc/1b/ab/cc1babdca6ea857b3e05aa1c6cd270a4.jpg',
        contacts: {
            email: 'lion.jung@example.com',
            phone: '010-3158-9724',
            web: 'https://junglion.dev'
        },
        techStack: ['Django', 'Python', 'PostgreSQL'],
        catchphrase: '좋은 서비스는 튼튼한 기반에서 시작됩니다.'
    },
    {
        name: '강사자',
        role: 'BACKEND',
        description: '서버 성능과 배포 자동화를 공부하며 안정적인 서비스 운영을 목표로 하고 있습니다.',
        profileImgLink: 'https://i.pinimg.com/736x/18/a1/aa/18a1aab1b1c82e43a4cb5ab1687f1b2b.jpg',
        contacts: {
            email: 'lion.kang@example.com',
            phone: '010-6273-5419',
            web: 'https://kanglion.dev'
        },
        techStack: ['Node.js', 'Docker', 'AWS'],
        catchphrase: '문제가 생기기 전에 대비하는 개발자가 되고 싶습니다.'
    },
    {
        name: '조사자',
        role: 'Plan & Design',
        description: '사용자 문제를 발견하고 서비스 흐름으로 정리하는 기획 과정을 좋아합니다.',
        profileImgLink: 'https://i.pinimg.com/736x/3c/ce/47/3cce4719e4f884540bd0897606942b99.jpg',
        contacts: {
            email: 'lion.cho@example.com',
            phone: '010-4396-8125',
            web: 'https://cholion.dev'
        },
        techStack: ['Figma', 'UX Research', 'Wireframe'],
        catchphrase: '좋은 기획은 좋은 질문에서 시작된다고 믿습니다.'
    },
    {
        name: '윤사자',
        role: 'Plan & Design',
        description: '복잡한 정보를 직관적인 화면과 경험으로 정리하는 UI/UX 디자인에 관심이 있습니다.',
        profileImgLink: 'https://i.pinimg.com/1200x/b8/9c/db/b89cdbc07c177e1ed88cf3d99452c2ac.jpg',
        contacts: {
            email: 'lion.yoon@example.com',
            phone: '010-7581-3642',
            web: 'https://yoonlion.dev'
        },
        techStack: ['Figma', 'UI Design', 'Design System'],
        catchphrase: '사용자가 고민하지 않는 디자인을 만들겠습니다.'
    },
    {
        name: '한사자',
        role: 'Plan & Design',
        description: '아이디어를 구체적인 서비스로 발전시키고 사용자 경험을 설계하는 것을 좋아합니다.',
        profileImgLink: 'https://i.pinimg.com/736x/c3/67/2d/c3672d4c2057b5b4c0dfcff3da69e84e.jpg',
        contacts: {
            email: 'lion.han@example.com',
            phone: '010-1935-6478',
            web: 'https://hanlion.dev'
        },
        techStack: ['Prototyping', 'UX Writing', 'User Flow'],
        catchphrase: '아이디어를 실제 경험으로 연결하고 싶습니다.'
    }
];

// 프로필 이미지 URL이 없는 사자(폼으로 새로 추가한 사자)에게 대신 보여줄 기본 이미지 주소
// TODO: 사용할 플레이스홀더 이미지 URL을 여기에 넣기
const DEFAULT_PROFILE_IMG = 'https://i.pinimg.com/1200x/b3/c9/8a/b3c98a77c29cef6228a11b516d2d3fc9.jpg';

const cardLayoutArea = document.querySelector('.card-layout-area');
const detailProfileCardArea = document.querySelector(
    '.detail-profile-card-area'
);

// 사용자가 폼에 입력한 문자열이 innerHTML로 들어가므로, HTML 특수문자를 치환해
// 입력값에 태그가 섞여도 코드로 실행되지 않고 글자 그대로 표시되게 한다.
function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// lions 배열을 기준으로 간단 카드 / 상세 카드 영역을 처음부터 다시 그린다.
// 추가·삭제 후에는 이 함수 하나만 호출하면 화면이 항상 lions와 일치한다.
function renderCards() {
    // 이전에 그려진 카드를 비워야 기존 카드가 중복되어 쌓이지 않는다.
    cardLayoutArea.innerHTML = '';
    detailProfileCardArea.innerHTML = '';

    lions.forEach((lion) => {
        // 이미지 URL이 비어 있으면(폼으로 추가한 사자) 기본 이미지를 사용
        const imgSrc = lion.profileImgLink || DEFAULT_PROFILE_IMG;
        // 관심 기술이 하나도 없으면 배지 내용이 'undefined'로 찍히지 않도록 빈 문자열 처리
        const badge = lion.techStack[0] || '';

        cardLayoutArea.innerHTML += `
        <div class="baby-lion-card">
            <div class="profile-img">
                <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(lion.name)} 프로필 이미지">
                <span class="profile-img-badge">${escapeHtml(badge)}</span>
            </div>

            <div class="name-role">
                <h2>${escapeHtml(lion.name)}</h2>
                <h4>${escapeHtml(lion.role)}</h4>
            </div>

            <p>${escapeHtml(lion.description)}</p>
        </div>
    `;

        // 관심 기술은 제출 시점에 최대 3개로 잘라 저장하므로, 저장된 항목(1~3개)을 map으로 전부 출력
        const techItems = lion.techStack
            .map((tech) => `<li>${escapeHtml(tech)}</li>`)
            .join('');

        detailProfileCardArea.innerHTML += `
        <div class="detail-card">

            <div class="name-role">
                <h2>${escapeHtml(lion.name)}</h2>
                <h4>${escapeHtml(lion.role)}</h4>
            </div>

            <h4>자기소개</h4>
            <p>${escapeHtml(lion.description)}</p>

            <h4>연락처</h4>
            <ul>
                <li>Email:<a href="mailto:${escapeHtml(lion.contacts.email)}">${escapeHtml(lion.contacts.email)}</a></li>
                <li>Phone: ${escapeHtml(lion.contacts.phone)}</li>
                <li><a href="${escapeHtml(lion.contacts.web)}">${escapeHtml(lion.contacts.web)}</a></li>
            </ul>

            <h4>관심 기술</h4>
            <ul>
                ${techItems}
            </ul>

            <h4>한 마디</h4>
            <p>${escapeHtml(lion.catchphrase)}</p>

        </div>
    `;
    });

    // 인원수는 별도 변수 없이 배열 길이에서 바로 가져와 항상 lions와 일치시킨다.
    headCount.textContent = lions.length;
}

const openBtn = document.querySelector(".btn_add");
const form = document.querySelector(".new-lion-info");
const headCount = document.querySelector("#head-count");
const deleteLion = document.querySelector(".delete_lion");

openBtn.addEventListener("click", function () {
    form.classList.toggle("show");
});

// 폼 제출 이벤트: 입력값을 lion 객체로 만들어 lions 배열에 추가하고 다시 그린다.
form.addEventListener("submit", (event) => {
    // 기본 동작(페이지 새로고침)을 막아야 화면과 lions 배열이 유지된다.
    event.preventDefault();

    const newLion = {
        name: document.querySelector("#lion-name").value.trim(),
        role: document.querySelector("#part-name").value,
        description: document.querySelector("#lion-description").value.trim(),
        // 폼에는 이미지 입력란이 없으므로 빈 문자열로 두고, 렌더링 시 DEFAULT_PROFILE_IMG로 대체
        profileImgLink: '',
        contacts: {
            email: document.querySelector("#lion-email").value.trim(),
            phone: document.querySelector("#lion-phone").value.trim(),
            web: document.querySelector("#lion-web").value.trim()
        },
        // 쉼표로 나누고, 앞뒤 공백 제거, 빈 항목(연속 쉼표 등) 제외
        techStack: document.querySelector("#lion-tech-stack").value
            .split(',')
            .map((tech) => tech.trim())
            .filter(Boolean)
            .slice(0, 3),
        catchphrase: document.querySelector("#lion-catchphrase").value.trim()
    };

    lions.push(newLion);
    renderCards();

    // 다음 입력을 위해 입력값을 비우고 폼을 다시 숨긴다.
    form.reset();
    form.classList.remove("show");
});

deleteLion.addEventListener("click", () => {
    // 배열이 비었을 때 pop()을 호출해도 의미가 없으므로 바로 종료
    if (lions.length === 0) return;

    lions.pop();
    renderCards();
});

// 첫 로드 시 초기 lions 데이터를 화면에 그린다.
renderCards();
