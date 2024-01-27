import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
	return (
		<Card width='300px' borderRadius={10} overflow={"hidden"} height='330px'>
			<Skeleton/>
      <CardBody>
        <SkeletonText/>
      </CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
