import * as SC from './MainPage.styled';
const { descriptions } = require('./constant');

const Description = () => {
  return (
    <SC.Section>
      <SC.Container>
        <ul>
          {descriptions.map(({ badge, title, images, description }, inx) => {
            return (
              <SC.ListItem key={title}>
                <SC.ItemWrapper>
                  <SC.ItemNumber>{inx + 1}.</SC.ItemNumber>
                  {badge && <SC.ItemBadge>{badge}</SC.ItemBadge>}
                  <SC.ItemTitle>{title}</SC.ItemTitle>
                  <SC.ItemDescription>{description}</SC.ItemDescription>
                </SC.ItemWrapper>
                <picture>
                  <source
                    srcSet={`${images.desc.x1} 1x, ${images.desc.x2} 2x`}
                    type="image/jpg"
                    media="(min-width: 1440px)"
                  />
                  <source
                    srcSet={`${images.tab.x1} 1x, ${images.tab.x2} 2x`}
                    type="image/jpg"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={`${images.mob.x1} 1x, ${images.mob.x2} 2x`}
                    type="image/jpg"
                    media="(max-width: 767px)"
                  />
                  <SC.ItemImg src={images.mob.x1} alt="preview calendar" />
                </picture>
              </SC.ListItem>
            );
          })}
        </ul>
      </SC.Container>
    </SC.Section>
  );
};
export default Description;
