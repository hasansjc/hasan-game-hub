import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width='200px' borderRadius={10} overflow={"hidden"} height='200px'>
			<Skeleton/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
